interface ISmallBanner {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  imageSrc: string;
}

export interface SmallBannersTypes {
  bgColor: string;
  hoverEffect: boolean;
  titleClass: string;
  subtitleClass: string;
  imageSize: string;
  smallBanner: ISmallBanner;
}
