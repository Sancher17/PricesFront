export class BaseEntity {
  id: number;
  model: string;
  linkDetailInfo: string;
  source: string;
  category: string;
  price: number;

  constructor(data?: Partial<BaseEntity>)

  constructor(data: Partial<BaseEntity>) {
    Object.assign(this, data);
  }
}
