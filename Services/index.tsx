import { request, gql } from "graphql-request";

export const getVehicleList = async () => {
  const document = gql`
    query MyQuery {
      vehicleS {
        avarage
        createdAt
        engType
        id
        name
        price
        publishedAt
        seat
        stage
        updatedAt
        vehicleBrand
        vehicleType
        image {
          url
        }
      }
    }
  `;
  const result = await request(
    "https://ap-south-1.cdn.hygraph.com/content/clsops88k059s01ume6p5ro2q/master",
    document
  );
  return result;
};
