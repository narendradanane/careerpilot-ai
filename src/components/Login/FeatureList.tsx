import {
  Briefcase,
  Calendar,
  BarChart3,
  UserRound,
} from "lucide-react";

function FeatureList() {
  const features = [
    {
      icon: <Briefcase size={20} />,
      text: "Track Job Applications",
    },
    {
      icon: <UserRound size={20} />,
      text: "Manage Recruiters",
    },
    {
      icon: <Calendar size={20} />,
      text: "Schedule Interviews",
    },
    {
      icon: <BarChart3 size={20} />,
      text: "Career Analytics",
    },
  ];

  return (
    <div className="mt-10 space-y-5">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-3 text-white"
        >
          <div className="text-blue-200">
            {feature.icon}
          </div>

          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
}

export default FeatureList;