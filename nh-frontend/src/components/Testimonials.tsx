import { Card, CardContent } from "@/components/ui/card";
import { StarIcon, QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Md Helal Ahmed",
    university: "INTI International University",
    country: "Malaysia",
    program: "Foundation in Science",
    rating: 5,
    text: "I had an excellent experience with NH Global Education in Malaysia. They guided me step by step throughout the entire study abroad process, from application to visa support. The team was professional, responsive, and always ready to address my questions. Thanks to their support, my journey to study overseas was smooth and stress-free. I highly recommend NH Global Education to anyone seeking trustworthy and reliable guidance for studying abroad.",
    avatar: "HA",
  },
  {
    id: 2,
    name: "Arina Karim",
    university: "City University Malaysia",
    country: "Malaysia",
    program: "Bachelor of  Hospitality Management",
    rating: 5,
    text: "I had a wonderful experience with NH Global Education. They made my journey to Malaysia for studies smooth and stress-free. From start to finish, the team was professional, supportive, and completely trustworthy. They guided me at every step and always stayed connected to ensure everything went well. I am truly grateful to be associated with such a dependable, student-focused organization. Thank you, NH Global Education, for your constant support. Truly an ideal choice for anyone aspiring to study abroad!",
    avatar: "AK",
  },
  {
    id: 3,
    name: "MST ULFATARA",
    university: "University Malaysia of Computer Science & Engineering",
    country: "Malaysia",
    program: "Master of Business Administration",
    rating: 5,
    text: "NH Global Education is a trustworthy and transparent agency for study visas. Alhamdulillah, I successfully came to Malaysia through their guidance. The CEO personally ensured my visa approval within just 25 days, without any hidden charges. From application to arrival, I received continuous support even after reaching Malaysia with accommodation and other needs. NH Global is a true partner in fulfilling students’ dreams, and I sincerely wish the company lasting success.",
    avatar: "MU",
  },
  {
    id: 4,
    name: "MD SUJA TASDIK",
    university: "Kuala Lumpur University of Science and Technology",
    country: "Malaysia",
    program: "Master of Civil Engineering",
    rating: 5,
    text: "Choosing Malaysia for my Master of Civil Engineering was a big decision, and I am glad I trusted NH Global Education. Unlike many agencies, they handled my admission and visa process with complete professionalism and made everything stress-free. The CEO and his team were always available to answer my questions, and every step was managed smoothly and on time. I truly appreciate their dedication and recommend NH Global Education to anyone who wants a reliable and supportive partner for studying abroad. Thank you!",
    avatar: "ST",
  },
  {
    id: 5,
    name: "Parent of Marufa Akter",
    university: "SEGi University",
    country: "Malaysia",
    program: "Bachelor of Information Technology",
    rating: 5,
    text: "As a parent, I am deeply grateful to NH Global Education for their support in my daughter Marufa Akter’s admission to the Bachelor of Information Technology (Hons) at SEGi University. Her case was very critical, with multiple rejections before, but NH Global managed to secure her visa within just one month. Their professionalism and dedication made a huge difference, and I truly appreciate their trustworthy guidance.",
    avatar: "MA",
  },
  {
    id: 6,
    name: "WICKNESWARY NADARAJAH",
    university: "INTI International University & Colleges",
    country: "Malaysia",
    program: "Senior Executive, International Office",
    rating: 5,
    text: "I’ve been working with NH Global Education for the past two years, and they have been an excellent authorised partner of INTI. They’ve consistently helped recruit a good number of quality students from Bangladesh. One of their greatest strengths is their responsiveness,  they always attend to students’ concerns and inquiries promptly. The quality of their work and their dedication to student success are truly appreciable. It’s been a pleasure collaborating with such a supportive team.",
    avatar: "WN",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">
            Success Stories from Our Students
          </h2>
          <p className="md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of successful students who have achieved their study
            abroad dreams with our comprehensive support and guidance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group border-0 shadow-elegant hover:shadow-glow transition-all duration-500 hover:-translate-y-1 bg-gradient-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.program}
                    </p>
                  </div>
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4 text-accent fill-current"
                    />
                  ))}
                </div>

                <div className="relative mb-4">
                  <QuoteIcon className="h-6 w-6 text-primary/30 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-4">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="text-sm text-muted-foreground">
                  <span className="font-medium">{testimonial.university}</span>
                  <span className="mx-2">•</span>
                  <span>{testimonial.country}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
