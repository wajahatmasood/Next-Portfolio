'use client';

import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import { useRouter } from 'next/router';

type Props = {};

const Contact = (props: Props) => {
  const router = useRouter();
  const [thankYou, setThankYou] = useState(false);

  useEffect(() => {
    if (router.asPath.includes('success=true')) {
      setThankYou(true);
      // Remove the query param from URL
      const cleanUrl = window.location.pathname;
      window.history.replaceState(null, '', cleanUrl);
    }
  }, [router.asPath]);

  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>

      <div className="container py-10">
        {thankYou && (
          <div className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
            ✅ Thank you for your message! I’ll get back to you soon.
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Postal Address: Geschwister-Scholl-Straße 11c, 35039, Marburg</p>
              <p>Letter Box: Ali 00-11</p>
              <p>Frankfurt, Germany</p>
              <p className="mt-4">+49 15563 887210</p>
              <p>wajahatmasood12@gmail.com</p>
            </div>
          </div>

          <div className="col-span-2">
            <form
              action="https://formsubmit.co/wajahatmasood12@gmail.com"
              method="POST"
              className="space-y-8"
            >
              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Contact Form Submission" />
              <input type="hidden" name="_autoresponse" value="Thank you for reaching out! I’ll get back to you soon." />
              {/* <input type="hidden" name="_next" value="https://yourdomain.com/contact?success=true" /> */}

              <div className="grid gap-8 md:grid-cols-2">
                <Input name="name" placeholder="Your Name" required />
                <Input name="email" type="email" placeholder="Email Address" required />
              </div>

              <div>
                <Input name="subject" placeholder="Subject" required />
              </div>

              <div>
                <TextArea name="message" placeholder="Message" required />
              </div>

              <div>
                <Button type="submit" className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
