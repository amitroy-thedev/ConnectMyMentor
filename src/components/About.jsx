import { Calendar, MessageSquare, Users } from "lucide-react";

const Card = () => {
const details = [
    {icon: <Users/>,
    title: "Expert Mentors",
    description: "Connect with experienced professionals from top companies worldwide."
    },
    {icon: <Calendar/>,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your schedule with our easy-to-use calendar."
    },
    {icon: <MessageSquare/>,
    title: "Direct Communication",
    description: "Chat directly with your mentor for quick questions and feedback."
    }
]

    return (
        <section className="grid md:grid-cols-3 gap-5 ml-2 mr-2">
            {details.map((item, index) => (
        <div className="bg-white p-6 rounded-lg shadow-sm border" key={index}>
          <div className="h-12 w-12 text-primary">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-600">
            {item.description}
          </p>
        </div>
            ))}
      </section>
    );
  };
  
  export default Card;
  