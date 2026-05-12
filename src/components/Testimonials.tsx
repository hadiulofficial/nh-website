import { Star, Quote } from "lucide-react";

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
    program: "Bachelor of Hospitality Management",
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
    text: "NH Global Education is a trustworthy and transparent agency for study visas. Alhamdulillah, I successfully came to Malaysia through their guidance. The CEO personally ensured my visa approval within just 25 days, without any hidden charges. From application to arrival, I received continuous support even after reaching Malaysia with accommodation and other needs. NH Global is a true partner in fulfilling students' dreams, and I sincerely wish the company lasting success.",
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
    text: "As a parent, I am deeply grateful to NH Global Education for their support in my daughter Marufa Akter's admission to the Bachelor of Information Technology (Hons) at SEGi University. Her case was very critical, with multiple rejections before, but NH Global managed to secure her visa within just one month. Their professionalism and dedication made a huge difference, and I truly appreciate their trustworthy guidance.",
    avatar: "MA",
  },
  {
    id: 6,
    name: "WICKNESWARY NADARAJAH",
    university: "INTI International University & Colleges",
    country: "Malaysia",
    program: "Senior Executive, International Office",
    rating: 5,
    text: "I've been working with NH Global Education for the past two years, and they have been an excellent authorised partner of INTI. They've consistently helped recruit a good number of quality students from Bangladesh. One of their greatest strengths is their responsiveness, they always attend to students' concerns and inquiries promptly. The quality of their work and their dedication to student success are truly appreciable. It's been a pleasure collaborating with such a supportive team.",
    avatar: "WN",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary uppercase tracking-wider mb-3">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Success Stories from Our Students
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Join thousands of successful students who have achieved their study
            abroad dreams with our comprehensive support and guidance.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.id}
              className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-semibold text-sm flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-foreground truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground truncate">
                    {testimonial.program}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-accent fill-accent"
                  />
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-5">
                <Quote className="absolute -top-1 -left-1 h-6 w-6 text-primary/10" />
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-5 pl-4">
                  {testimonial.text}
                </p>
              </div>

              {/* Footer */}
              <div className="pt-5 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">{testimonial.university}</span>
                  <span className="mx-2 text-border">|</span>
                  <span>{testimonial.country}</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
