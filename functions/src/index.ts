import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
const universal = require(`${process.cwd()}/dist/website/server/main`).server;
admin.initializeApp();

const mailjet = require('node-mailjet')
                .connect(functions.config().mailjet.api_key, functions.config().mailjet.secret_key);

export const ssr = functions.https.onRequest(universal);

export const newsLetterSignUp = functions.https.onRequest(async (request, response) => {

  // tslint:disable: max-line-length
  // tslint:disable: object-literal-key-quotes
  // tslint:disable: object-literal-shorthand

  const name = request.query.na;
  const email = request.query.em;
  const country = request.query.co;
  const state = request.query.st;
  const ips = [request.query.ip];
  const newsLSub = request.query.neSub;
  const time = admin.firestore.Timestamp.now();

  await admin.firestore().doc('admin/contacts/list/' + email)
              .set({ 'name': name, 'email': email, 'country': country, 'state': state, 'dateReg': time, 'ips': ips, newsLetter_sub: newsLSub} )
              .then( res => {
                response.json({success: true, message: 'Thank you for signing up!', res: res, error: null});
              }, error => {
                response.json({success: false, message: 'Failed to sign up', error: {code: '', message: error}});
              });

  response.end();
});

export const addNewContactToList = functions.firestore
                                  .document('admin/contacts/list/{userEmail}')
                                  .onCreate(async (change, context) => {

  const data = change.data();

  if (data) {
    const name = data.name;
    const email = context.params.userEmail;
    const country = data.country;
    const state = data.state;
    // const dateReg = data.dateReg;
    const newsLetterSub = data.newsLetter_sub;

    const request = mailjet
                    .post('contact', {'version': 'v3'})
                    .request({
                      'IsExcludedFromCampaigns': 'false',
                      'Name': name,
                      'Email': email,
                    });

    return await request
      .then((results: any) => {
        console.log(results);

        const request1 = mailjet
                        .post('listrecipient', {'version': 'v3'})
                        .request({
                            'IsUnsubscribed': 'false',
                            'ContactAlt': context.params.userEmail,
                            'ListID': '17717'
                          });

        request1
          .then((result: { body: any; }) => {
            console.log(result.body);

            const request2 = mailjet
                            .put('contactdata', {'version': 'v3'})
                            .id(context.params.userEmail)
                            .request({
                                'Data': [
                                  {
                                    'Name': 'country',
                                    'Value': country
                                  },
                                  {
                                    'Name': '_email',
                                    'Value': email
                                  },
                                  {
                                    'Name': 'name',
                                    'Value': name
                                  },
                                  {
                                    'Name': 'newsletter_sub',
                                    'Value': newsLetterSub
                                  },
                                  {
                                    'Name': 'state_province',
                                    'Value': state
                                  },
                                  {
                                    'Name': 'store_sub',
                                    'Value': false
                                  },
                                ]
                              });
            request2
              .then((result1: { body: any; }) => {
                console.log(result1.body);
              })
              .catch((err: { statusCode: any; }) => {
                console.log(err.statusCode);
              });


          })
          .catch((err: { statusCode: any; }) => {
            console.log('Failed adding new contact to the list');
            console.log(err.statusCode);
          });

      })
      .catch((err: any) => {
        console.log('Failed adding new contact');
        console.log(err);

      });

  } else {
    console.log('Contact does not exist: ' + context.params.userEmail);
  }

});
