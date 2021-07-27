type ImageType = {
  key: string;
  value: string;
};

export const returnDesiredImage = (
  imgArr: Array<ImageType>,
  icon: string
): ImageType | undefined =>
  imgArr instanceof Array
    ? imgArr.find((img: ImageType) => img.key === icon)
    : undefined;
