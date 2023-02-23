import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import Layout from '@/components/layout';
import { FADE_DOWN_ANIMATION_VARIANTS } from '@/lib/constants';
import { MailerSend, EmailParams, Sender, Recipient } from "mailer-send-ts";

const mailerSend = new MailerSend({ apiKey: "your_api_key_here" });

const Contact = () => {
    const [formStatus, setFormStatus] = useState<string>('idle');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data: EmailParams) => {
        setFormStatus('sending');

        try {
            await mailerSend.send({
                to: [{ email: process.env.NEXT_PUBLIC_CONTACT_EMAIL }],
                from: { email: data.email, name: data.name },
                subject: `New message from ${data.name} (${data.email})`,
                html: data.message,
            });

            setFormStatus('success');
        } catch (error) {
            console.error(error);
            setFormStatus('error');
        }
    };

    return (
        <Layout>
            <motion.div
                className="px-5 py-10 mx-auto max-w-7xl"
                initial="hidden"
                whileInView="show"
                animate="show"
                viewport={{ once: true }}
                variants={FADE_DOWN_ANIMATION_VARIANTS}
            >
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <Input
                            type="text"
                            placeholder="Name"
                            {...register('name', { required: true })}
                        />
                        {errors.name && (
                            <p className="text-red-500">Please enter your name</p>
                        )}
                    </motion.div>

                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <Input
                            type="email"
                            placeholder="Email"
                            {...register('email', { required: true })}
                        />
                        {errors.email && (
                            <p className="text-red-500">Please enter a valid email</p>
                        )}
                    </motion.div>

                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <Input
                            type="textarea"
                            placeholder="Message"
                            rows={6}
                            {...register('message', { required: true })}
                        />
                        {errors.message && (
                            <p className="text-red-500">Please enter a message</p>
                        )}
                    </motion.div>

                    <motion.div variants={FADE_DOWN_ANIMATION_VARIANTS}>
                        <Button
                            type="submit"
                            variant="blue"
                            disabled={formStatus === 'sending'}
                        >
                            {formStatus === 'sending' ? 'Sending...' : 'Send'}
                            <SendIcon className="inline-block ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </form>
            </motion.div>

        </Layout>
    );
};

export default Contact;