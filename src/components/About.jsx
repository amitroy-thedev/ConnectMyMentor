import { Briefcase, Calendar, MessageSquare, Users } from "lucide-react";

const Card = () => {
  const details = [
    {
      icon: <Users size={40} />,
      title: "Alumni Mentors",
      description:
        "Connect with experienced alumni from your college who are now working at top companies.",
    },
    {
      icon: <Calendar size={40}/>,
      title: "Flexible Scheduling",
      description:
        "Easily schedule 1:1 sessions with mentors based on your availability.",
    },
    {
      icon: <MessageSquare size={40}/>,
      title: "Direct Communication",
      description:
        "Engage in meaningful conversations with mentors for career guidance and insights.",
    },
    {
      icon: <Briefcase size={40}/>,
      title: "Career Growth",
      description:
        "Get valuable industry insights and tips from alumni to accelerate your professional journey.",
    },
  ];

  return (
    <div className="p-[000.1px]" style={{backgroundColor: "var(--color-softBlue)"}}>
      <div className=" flex justify-center text-5xl font-bold text-white my-14">
        Why Choose Connect My Mentor?
      </div>

      <section className="grid md:grid-cols-2 gap-8 m-4">
        {details.map((item, index) => (
          <div
            className="bg-white p-6 rounded-lg shadow-sm border-white mt-3"
            key={index}
          >
            <div className="h-16 w-16 text-primary">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Card;
