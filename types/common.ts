export type ListDto<T> = {
  items: T[];
  noOfTotalItem: number;
};

export type RespDto<T> = {
  data?: T;
  sucs: boolean;
  message?: string;
};

export type AppDropdownItem = {
  value: number | string;
  title: string;
};

export class BaseSearchParam {
  pageNo: number;
  pageSize: number;
  keyword?: string;
  constructor(pageNo: number, pageSize: number) {
    this.keyword = "";
    this.pageNo = pageNo || 1;
    this.pageSize = pageSize || 20; //TODO
  }

  skip(): number {
    if (this.pageNo <= 1) return 0;
    return this.pageNo * (this.pageSize - 1);
  }
}
