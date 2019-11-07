export class TypeDispositiveDtoResponse {
  id: number;
  name: string;
  url: string;
  status: boolean;
  totalDispositive: number;
  constructor(
    id: number,
    name: string,
    url: string,
    status: boolean,
    totalDispositive: number,
  ) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.status = status;
    this.totalDispositive = totalDispositive;
  }
}
