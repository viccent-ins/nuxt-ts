interface IFormData {
  id: number,
  // title: string,
  // description: string,
  image: string,
  image_name: string,
}
interface ICarouselResponse {
    Carousels: IFormData[],
}
export {
  ICarouselResponse,
  IFormData,
};

