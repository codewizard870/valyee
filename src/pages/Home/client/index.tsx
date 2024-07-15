const Client = () => {
  return (
    <div className="flex flex-wrap md:flex-nowrap justify-center md:justify-between items-center gap-4 md:gap-0 mt-10 md:mt-[60px] mb-10 md:mb-[70px] border-t border-t-gray-1/10  border-b border-b-gray-1/10 h-[150px] mx-0 md:mx-[55px]">
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
