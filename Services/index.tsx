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
export const getAddress = async () => {
  const document = gql`
    query MyQuery {
      storesLocations {
        address
      }
    }
  `;
  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsops88k059s01ume6p5ro2q/master",
    document
  );
  return result;
};

export const createBooking = async (formValue: any) => {
  const mutationQuery =
    gql`
  mutation MyMutation {
    createBooking(
      data:  {userName: "` +
    formValue.userName +
    `", 
      pickUpDate: "` +
    formValue.pickUpDate +
    `", 
      pickUpTime: "` +
    formValue.pickUpTime +
    `", 
      dropOffDate: "` +
    formValue.dropOffDate +
    `", 
      dropOffTime: "` +
    formValue.dropOffTime +
    `", 
      contactNumber: "` +
    formValue.contactNumber +
    `", 
    vehicleId: {connect: 
        {id: "` +
    formValue.vehicleId +
    `"}}}
    ) {
      id
    }
  }
  
  `;

  const result = await request(
    "https://api-ap-south-1.hygraph.com/v2/clsops88k059s01ume6p5ro2q/master",
    mutationQuery
  );
  return result;
};
