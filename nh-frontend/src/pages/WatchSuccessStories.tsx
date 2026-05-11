import { useEffect, useState } from "react";
import axios from "axios";
import parse from "html-react-parser";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlayIcon, XIcon } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// Placeholder image (used as fallback if data.image is missing)
const DEFAULT_IMAGE = "https://via.placeholder.com/400x200?text=Success+Story";

interface Story {
  id: number;
  image: string;
  title: string;
  description: string;
  highlights: string[];
}

interface Pagination {
  current_page: number;
  total_pages: number;
  total_items: number;
  per_page: number;
}

const WatchSuccessStories = () => {
  const [stories, setStories] = useState<Story[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    current_page: 1,
    total_pages: 1,
    total_items: 0,
    per_page: 3,
  });
  const [loading, setLoading] = useState(true);
  const [imageLoading, setImageLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedImage, setSelectedImage] = useState<Story | null>(null);

  // Fetch stories with query parameters
  const fetchStories = async (params: { [key: string]: string }) => {
    setLoading(true);
    setImageLoading(true);
    setError("");
    const baseUrl = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
    const storageUrl = import.meta.env.VITE_STORAGE_URL || "http://localhost:5000/storage";
    console.log("Fetching stories with base URL:", baseUrl);
    console.log("Storage URL:", storageUrl);
    console.log("Request params:", params);

    try {
      const response = await axios.get(`${baseUrl}/api/stories`, { params });
      console.log("Stories response:", response.data);
      if (response.data.status === "success") {
        const storiesData = response.data.data.map((data: any) => ({
          id: data.id,
          image: data.image ? `${storageUrl}/${data.image}` : DEFAULT_IMAGE,
          title: data.title,
          description: data.description,
          highlights: data.data,
        }));

        // Wait for all images to load
        const imagePromises = storiesData.map((story: Story) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.src = story.image;
            img.onload = () => resolve();
            img.onerror = () => resolve(); // Resolve on error to avoid hanging
          })
        );

        await Promise.all(imagePromises);
        console.log("All images loaded");

        setStories(storiesData);
        setPagination(response.data.pagination);
        console.log("Set stories:", storiesData);
        console.log("Set pagination:", response.data.pagination);
      } else {
        setError("No stories found.");
        console.warn("Unexpected response status:", response.data);
      }
    } catch (err: any) {
      const errorMsg = err.response?.data?.message || "Failed to fetch stories.";
      setError(errorMsg);
      console.error("Error fetching stories:", err.message, err.response?.data);
    } finally {
      setLoading(false);
      setImageLoading(false);
      console.log("Loading and imageLoading set to false");
    }
  };

  // Fetch stories on component mount
  useEffect(() => {
    fetchStories({ limit: "3", page: "1" });
  }, []);

  // Handle page change
  const handlePageChange = (newPage: number) => {
    const params: { [key: string]: string } = { limit: "3", page: newPage.toString() };
    console.log("Page change triggered with params:", params);
    fetchStories(params);
  };

  // Handle loading state with spinner
  if (loading || imageLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
          <p className="text-foreground text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">{error}</h1>
          <Button onClick={() => fetchStories({ limit: "3", page: "1" })}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-20 pt-[120px]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-6">
            Success Stories Gallery
          </h1>
          <p className="md:text-xl text-white/90 max-w-2xl mx-auto">
            Witness the joy and achievements of our students who have successfully started their study abroad journey with our guidance.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Visa Approvals</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">Universities</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visual Journey of Success
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each image tells a story of dreams fulfilled, goals achieved, and futures brightened through quality education abroad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Card
                key={story.id}
                className="group hover:shadow-glow transition-all duration-300 cursor-pointer overflow-hidden"
                onClick={() => setSelectedImage(story)}
              >
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayIcon className="h-12 w-12 text-white" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{story.title}</h3>
                  <div className="text-muted-foreground mb-4 line-clamp-3">
                    {parse(story.description)}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {story.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {stories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No success stories found.
              </p>
            </div>
          )}

          {/* Pagination Controls */}
          {stories.length > 0 && (
            <div className="mt-8 flex justify-center items-center gap-4">
              <Button
                onClick={() => handlePageChange(pagination.current_page - 1)}
                disabled={pagination.current_page === 1}
                variant="outline"
              >
                Previous
              </Button>
              <span className="text-foreground">
                Page {pagination.current_page} of {pagination.total_pages}
              </span>
              <Button
                onClick={() => handlePageChange(pagination.current_page + 1)}
                disabled={pagination.current_page === pagination.total_pages}
                variant="outline"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <XIcon className="h-6 w-6" />
            </button>
            <Card className="overflow-hidden">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <div className="text-muted-foreground mb-4">
                  {parse(selectedImage.description)}
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedImage.highlights.map((highlight, index) => (
                    <Badge key={index} variant="secondary">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default WatchSuccessStories;