import { useEffect } from 'react';
// @ts-ignore
import annyang from 'annyang';
import { useNavigate } from 'react-router-dom';
const VoiceControlledNavigation = () => {


    const navigate = useNavigate();

    const bottomToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

    const scrollDown = () => {
        window.scrollBy({ top: window.innerHeight, left: 0, behavior: 'smooth' });
    };

    const scrollUp = () => {
        window.scrollBy({ top: -window.innerHeight, left: 0, behavior: 'smooth' });
    };

    const openInstagram = () => {
        window.open("https://instagram.com/x_y_zome_03", "_blank");
    };

    const openFacebook = () => {
        window.open("https://facebook.com/x_y_zome_03", "_blank");
    };

    const openYoutube = () => {
        window.open("https://youtube.com/x_y_zome_03", "_blank");
    };

    const speakText = (text: string | undefined) => {
        const speechSynthesis = window.speechSynthesis;

        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        } else {
            console.error('Speech synthesis not supported in this browser.');
        }
    };

    const navigateTo = (destination: string) => {
        speakText(destination);
        setTimeout(() => {
            console.log(destination);
        }, 1000);
    };

    const openWhatsApp = () => {
        var phoneNumber = "+918657655887";
        var whatsappUrl = "https://wa.me/" + phoneNumber;
        window.open(whatsappUrl, "_blank");
    };

    const handleFormCommand = (fieldName: string, value: any) => {
        console.log(`Entering ${fieldName}: ${value}`);
    };

    const handleProductClick = (category: string, id: string) => {
        const cleanedCategory = category.toLowerCase().trim();
        const productId = `product-${cleanedCategory}-${id}`;

        const productElement = document.getElementById(productId);

        if (productElement) {
            console.log('Found product element:', productElement);
            productElement.click();
        } else {
            console.error(`Product element with ID ${productId} not found.`);
        }
    };







    useEffect(() => {
        const wakeWord = 'hey zome';

        const commands = {
            'scroll down': () => {
                navigateTo("scroll down");
                scrollDown();
            },
            'scroll up': () => {
                navigateTo("scroll up");
                scrollUp();
            },
            'scroll to top': bottomToTop,

            'navigate to shop': () => {
                navigateTo("Navigating to shop");
                setTimeout(() => navigate('/gallery'), 1000);
            },

            'navigate to contact': () => {
                navigateTo("Navigating to contact");
                setTimeout(() => navigate('/contact'), 1000);
            },

            'navigate to home': () => {
                navigateTo("Navigating to home");
                setTimeout(() => navigate('/'), 1000);
            },
            'navigate to terms and conditions': () => {
                navigateTo("Navigating to terms and cnoditions");
                setTimeout(() => navigate('/Terms'), 1000);
            },
            'navigate to privacy policy': () => {
                navigateTo("Navigating to privacy policy");
                setTimeout(() => navigate('/'), 1000);
            },
            'open instagram': () => {
                navigateTo("opening instagram");
                openInstagram();
            },
            'open facebook': () => {
                navigateTo("opening facebook");
                openFacebook();
            },
            'open youtube': () => {
                navigateTo("opening youtube");
                openYoutube();
            },
            'open whatsapp': () => {
                navigateTo("opening whatsapp");
                openWhatsApp();
            },
            'Select oversize': () => {
                navigateTo("you selected to oversize");
                navigate('/oversize');
            },
            'Select trendy': () => {
                navigateTo("you selected to trendy");
                navigate('/trend');
            },
            'Select full sleeves': () => {
                navigateTo("you selected to full sleeve");
                navigate('/fullsleeve');
            },
            'Select half sleeves': () => {
                navigateTo("you selected to half sleeve");
                navigate('/halfsleeve');
            },
            'Select back print': () => {
                navigateTo("you selected to backprint");
                navigate('/Backprint');
            },
            'Select front print': () => {
                navigateTo("you selected to front print");
                navigate('/frontprint');
            },
            'enter name *value': (value: any) => handleFormCommand('name', value),
            'enter email *value': (value: any) => handleFormCommand('email', value),
            'enter mobile *value': (value: any) => handleFormCommand('mobile', value),
            'submit form': () => {
                console.log("Submitting form");
            },
            'click on product *category *id': (category: string, id: string) => handleProductClick(category, id),
            // 'click on product  *id': ( id: string) => handleProductClick(id),

        };

        annyang.addCommands(commands);

        annyang.addCallback('start', () => {
            console.log('Listening...');
        });

        annyang.addCallback('result', (userSaid: string | string[]) => {
            if (userSaid.includes(wakeWord)) {
                annyang.removeCallback('result');
                annyang.start({ autoRestart: true, continuous: false });
            }
        });
        annyang.start({ autoRestart: true, continuous: false });

        return () => {
            annyang.abort();
        };
    }, [navigate]);

    return null;
};

export default VoiceControlledNavigation;
