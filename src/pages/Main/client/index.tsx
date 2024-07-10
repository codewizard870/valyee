const Client = () => {
  return (
    <div className="flex justify-between items-center mt-[60px] mb-[70px] border-t border-t-gray-1/10  border-b border-b-gray-1/10 h-[150px] mx-[55px]">
      {Clients.map((client, index) => (
        <img src={client.img} key={index} />
      ))}
    </div>
  );
};

export default Client;

const Clients = [
  {
    img: "/assets/client/airbnb.png",
  },
  {
    img: "/assets/client/google.png",
  },
  {
    img: "/assets/client/amazon.png",
  },
  {
    img: "/assets/client/microsoft.png",
  },
  {
    img: "/assets/client/fedex.png",
  },
  {
    img: "/assets/client/hubspot.png",
  },
];
