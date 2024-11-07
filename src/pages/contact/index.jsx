import React, { useEffect, useRef, useState } from 'react';
import Banner from "@/components/home/Banner";
import MainLayout from "@/layouts/MainLayout";
import styles from './index.module.css';
import Image from "next/image";
import { gsap } from 'gsap';
import { z } from 'zod'; // Import Zod
import { Toaster, toast } from 'sonner'; // Import Sonner
import Head from 'next/head';

// Define the validation schema
const contactSchema = z.object({
    name: z.string().nonempty("Name is required"),
    email: z.string().email("Invalid email format").nonempty("Email is required"),
    phone_number: z.string().nonempty("Phone number is required"),
    your_business: z.string().nonempty("Your business is required"),
    message: z.string().nonempty("Message is required"),
});

function Contact() {
    const [loading, setLoading] = useState(false)
    const imageRef = useRef(null);
    const sendRef = useRef(null);
    const [placeholders, setPlaceholders] = useState({
        name: "Name",
        email: "Email",
        phone_number: "Phone Number",
        your_business: "Your Business",
        message: "Message"
    });
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone_number: '',
        your_business: '',
        message: ''
    });
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone_number: '',
        your_business: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrors({ name: '', email: '', phone_number: '', your_business: '', message: '' }); // Reset errors

        try {
            // Validate form data
            contactSchema.parse(formData); // This will throw an error if validation fails
            setLoading(true);

            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success('Email sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    phone_number: '',
                    your_business: '',
                    message: ''
                });
                setLoading(false);
            } else {
                const errorData = await response.json();
                toast.error(`Error: ${errorData.error}`);
                setLoading(false);
            }
        } catch (error) {
            if (error instanceof z.ZodError) {
                const fieldErrors = {};
                error.errors.forEach(err => {
                    fieldErrors[err.path[0]] = err.message; // Map error messages to fields
                });
                setErrors(fieldErrors); // Set errors in state
            } else {
                toast.error('An error occurred while sending the email.');
            }
        }
    };

    const handleMouseEnter = (field) => {
        setPlaceholders(prev => ({
            ...prev,
            [field]: `Type Here`
        }));
    };

    const handleMouseLeave = (field) => {
        const formattedField = field.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase());

        setPlaceholders(prev => ({
            ...prev,
            [field]: formattedField
        }));
    };

    const handleButtonMouseEnter = () => {
        // Ensure imageRef.current is not null
        if (imageRef.current) {
            const tl = gsap.timeline();
            imageRef.current.src = '/assets/images/icons/arrow-blue.svg';
            tl.to(imageRef.current, {
                opacity: 0,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        duration: 0.5
                    });
                }
            })
                .to(sendRef.current, {
                    backgroundColor: '#ffffff',
                    duration: 0.1,
                    position: "+=0"
                });
        }
    };

    const handleButtonMouseLeave = () => {
        // Ensure imageRef.current is not null
        if (imageRef.current) {
            const tl = gsap.timeline();
            imageRef.current.src = '/assets/images/icons/arrow-slant.svg';
            tl.to(imageRef.current, {
                opacity: 0,
                duration: 0.1,
                onComplete: () => {
                    gsap.to(imageRef.current, {
                        opacity: 1,
                        duration: 0.1
                    });
                }
            })
                .to(sendRef.current, {
                    backgroundColor: 'transparent',
                    duration: 0.1,
                    position: "+=0"
                });
        }
    };

    const autoResize = (e) => {
        e.target.style.height = "auto";
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    useEffect(() => {
        const button = document.querySelector(`.${styles.scroll}`);

        const createRippleEffect = () => {
            const tl = gsap.timeline();

            tl.to(button, {
                boxShadow: "0 0 0 20px rgba(202, 231, 255, 0.53), 0 0 0 20px rgba(202, 231, 255, 0)",
                duration: 0.4,
                ease: "ease"
            })
                .to(button, {
                    boxShadow: "0 0 0 20px rgba(202, 231, 255, 0.25), 0 0 0 40px rgba(202, 231, 255, 0.28)",
                    duration: 0.2,
                    ease: "ease"
                })
                .to(button, {
                    boxShadow: "0 0 0 20px rgba(202, 231, 255, 0), 0 0 0 40px rgba(202, 231, 255, 0.28)",
                    duration: 0.4,
                    ease: "ease"
                })
                .to(button, {
                    boxShadow: "0 0 0 20px rgba(202, 231, 255, 0), 0 0 0 0px rgba(202, 231, 255, 0)",
                    duration: 0.3,
                    ease: "ease"
                });
        };

        button.addEventListener("mouseenter", createRippleEffect);

        return () => {
            button.removeEventListener("mouseenter", createRippleEffect);
        };
    }, []);

    return (
        <MainLayout>
            <Head>
                <title>Esquisse | Contact Us</title>
                <meta name="description" content="Whether you have a question about our services, need support, or want to discuss a new project, we’re here to help." />
            </Head>
            <Banner bgPath="url('/assets/images/contact_bg.svg')" isContactPage={true}>
                <p style={{ marginTop: 'auto', marginBottom: '-3rem' }}>Contact Us</p>
                <button className={styles.scroll}>SCROLL<br />DOWN</button>
            </Banner>

            <div className={styles.children}>
                <div className={styles.contactWrapper}>
                    <h1><strong>Enter</strong> the Vanguard of<br />Next-Generation Networking</h1>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <div style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder={placeholders.name}
                                    onMouseEnter={() => handleMouseEnter('name')}
                                    onMouseLeave={() => handleMouseLeave('name')}
                                />
                                {errors.name && <p style={{ color: 'red', textAlign: 'left' }}>{errors.name}</p>}
                            </div>
                            <div style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder={placeholders.email}
                                    onMouseEnter={() => handleMouseEnter('email')}
                                    onMouseLeave={() => handleMouseLeave('email')}
                                />
                                {errors.email && <p style={{ color: 'red', textAlign: 'left' }}>{errors.email}</p>}
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    id="phone_number"
                                    name="phone_number"
                                    value={formData.phone_number}
                                    onChange={handleChange}
                                    placeholder={placeholders.phone_number}
                                    onMouseEnter={() => handleMouseEnter('phone_number')}
                                    onMouseLeave={() => handleMouseLeave('phone_number')}
                                />
                                {errors.phone_number && <p style={{ color: 'red', textAlign: 'left' }}>{errors.phone_number}</p>}
                            </div>
                            <div style={{ width: '100%' }}>
                                <input
                                    type="text"
                                    id="your_business"
                                    name="your_business"
                                    value={formData.your_business}
                                    onChange={handleChange}
                                    placeholder={placeholders.your_business}
                                    onMouseEnter={() => handleMouseEnter('your_business')}
                                    onMouseLeave={() => handleMouseLeave('your_business')}
                                />
                                {errors.your_business && <p style={{ color: 'red', textAlign: 'left' }}>{errors.your_business}</p>}
                            </div>
                        </div>
                        <div className={styles.messageWrapper}>
                            <textarea
                                placeholder={placeholders.message}
                                className={styles.message}
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onInput={autoResize}
                                onMouseEnter={() => handleMouseEnter('message')}
                                onMouseLeave={() => handleMouseLeave('message')}
                            ></textarea>
                            {errors.message && <p style={{ color: 'red', textAlign: 'left' }}>{errors.message}</p>}
                        </div>

                        <button
                            type="submit"
                            className={styles.button}
                            onMouseEnter={handleButtonMouseEnter}
                            onMouseLeave={handleButtonMouseLeave}
                            disabled={loading}
                        >
                            {loading ? (
                                <Loading size="1.5em" />
                            ) : (
                                <>
                                    SEND
                                    <div className={styles.image} ref={sendRef}>
                                        <Image src={'/assets/images/icons/arrow-slant.svg'} width={20} height={20} ref={imageRef} />
                                    </div>
                                </>
                            )}
                        </button>
                    </form>
                    <Toaster />
                </div>
            </div>
        </MainLayout>
    );
}

export default Contact;

export function Loading({ size = '1rem' }) {
    return <div className={styles.loading} />
}