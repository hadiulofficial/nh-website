import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { FileX } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";



const UniversityDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [university, setUniversity] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // Fetch university data from backend
    useEffect(() => {
        const fetchUniversity = async () => {
            setLoading(true);
            setError("");
            const baseUrl = import.meta.env.VITE_API_BASE_URL;

            try {
                const response = await axios.get(`${baseUrl}/api/universities/${id}`);
                if (response.data.status === "success") {
                    const data = response.data.data;
                    setUniversity({
                        id: data.id,
                        name: data.name,
                        image: data.image,
                        pdf: data.pdf,
                    });
                } else {
                    setError("University not found.");
                }
            } catch (err) {
                setError(err.response?.data?.message || "Failed to fetch university data.");
            } finally {
                setLoading(false);
            }
        };

        fetchUniversity();
    }, [id]);

    // Handle loading state with spinner
    if (loading) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                    <p className="text-foreground text-lg">Loading...</p>
                </div>
            </div>
        );
    }

    // Handle error or not found
    if (error || !university) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-foreground mb-4">
                        {error || "University Not Found"}
                    </h1>
                    <Button onClick={() => navigate("/universities")}>
                        Back to Universities
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            <section className="py-16 flex items-center justify-center">
                {university?.pdf ? (
                    <iframe
                        src={`${ import.meta.env.VITE_STORAGE_URL}/${university.pdf}`}
                        className="h-screen w-full"
                        title="University PDF"
                    ></iframe>
                ) : (
                    <div className="flex flex-col items-center justify-center h-[calc(50vh)] text-center text-muted-foreground">
                        <FileX className="h-16 w-16 mb-4" />
                        <p className="text-lg font-medium">No data found</p>
                    </div>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default UniversityDetail;