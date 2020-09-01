export interface FunctionRes {
  status: boolean;
  message: string;
  res: string;
  error: { code: string; message: string };
}
