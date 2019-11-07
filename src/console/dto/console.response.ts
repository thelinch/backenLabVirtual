export class ConsoleDtoResponse {
  reply: { exito: boolean; text: string; error: string };
  constructor(reply: any) {
    this.reply = reply;
  }
}
