import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import techfestCertImg from "@/assets/techfest-certificate.png";
import techfestBannerImg from "@/assets/techfest-banner.jpg";

const Certifications = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    {/* Back Button */}
                    <Link to="/">
                        <Button variant="ghost" className="mb-8 hover:bg-primary/10 hover:text-primary transition-colors">
                            <ChevronLeft className="mr-2 h-4 w-4" />
                            Back to Portfolio
                        </Button>
                    </Link>

                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                            Professional Certifications
                        </h1>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A record of my academic and industry-recognized qualifications in Artificial Intelligence and Engineering.
                        </p>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-accent to-secondary mx-auto rounded-full mt-6" />
                    </div>

                    <div className="max-w-5xl mx-auto space-y-12">
                        {/* IIT Bombay Certificate */}
                        <Card className="overflow-hidden border-2 border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-500 shadow-xl group">
                            <div className="grid md:grid-cols-2 gap-0">
                                <div className="relative h-80 md:h-full overflow-hidden">
                                    <img
                                        src={techfestCertImg}
                                        alt="IIT Bombay AI Workshop Certificate"
                                        className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent pointer-events-none" />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2 text-primary">
                                            <Award className="h-6 w-6" />
                                            <span className="font-bold tracking-wider uppercase text-sm">Professional Certification</span>
                                        </div>
                                        <CardTitle className="text-3xl font-bold leading-tight">
                                            Artificial Intelligence Workshop
                                        </CardTitle>
                                        <p className="text-xl font-semibold text-secondary">
                                            Techfest IIT Bombay & HCL GUVI
                                        </p>
                                    </div>

                                    <CardContent className="p-0 space-y-4">
                                        <p className="text-muted-foreground leading-relaxed italic">
                                            "Awarded for the successful completion of the hands-on AI Workshop at Asia's largest science and technology festival, exploring RAG, Agentic AI, and production-level system design."
                                        </p>
                                        <div className="pt-4 flex gap-4">
                                            <Button
                                                onClick={() => window.open('https://www.linkedin.com/in/aditya-kumar05/overlay/1769323884724/single-media-viewer/?profileId=ACoAADkS1S4BPK4ZGT9aoIF5jHNKFhNyQRK7iPM', '_blank')}
                                                className="bg-primary hover:opacity-90 transition-opacity"
                                            >
                                                <ExternalLink className="mr-2 h-4 w-4" />
                                                Verify on LinkedIn
                                            </Button>
                                        </div>
                                    </CardContent>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </main>

            {/* Modern Footer for this page */}
            <footer className="py-12 border-t border-border/50 bg-muted/30">
                <div className="container mx-auto px-6 text-center text-muted-foreground">
                    <p>© 2026 Aditya Kumar. Professional Portfolio.</p>
                </div>
            </footer>
        </div>
    );
};

export default Certifications;
