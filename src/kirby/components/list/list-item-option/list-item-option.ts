import { ThemeColor } from './../../../helpers/theme-color.type';

export interface ItemOption {
  id: number;
  title: string;
  iconName?: string;
  themeColor?: ThemeColor;
  selected: boolean;
}

export interface SlidingOptions {
  start?: Array<ItemOption>;
  end?: Array<ItemOption>;
}

export interface SelectedItemWithOption {
  item: any;
  option?: ItemOption;
}