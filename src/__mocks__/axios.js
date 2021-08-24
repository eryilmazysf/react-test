//we got one intance from Api for testing
const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Laith",
          last: "Harb",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/men/59.jpg",
        },
        login: {
          username: "ThePhonyGOAT",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};
