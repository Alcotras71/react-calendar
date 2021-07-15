type ImageType = {
  key: string;
  value: string;
};

export const returnDesiredImage = (
  imgArr: Array<ImageType>,
  icon: string
): ImageType | undefined => {
  return imgArr.find((img: ImageType) => img.key === icon);
};
