"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import { useState } from "react";
import Event from '@/components/Event';
import events from '@/data/Events';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
const [tab, setTab] = useState("home");

  return (
    <main className = "flex flex-col h-screen justify-between">
      <ul className = "flex leading-6 text-gray-500 gap-x-32 content-center justify-center m-12">
        <li>
          <button className = "font-mono hover:underline" onClick={() => setTab ("home")}>Home</button>
        </li>
        <li>
          <button className = "font-mono hover:underline" onClick={() => setTab ("about")}>About</button>
        </li>
        <li>
          <button className = "font-mono hover:underline" onClick={() => setTab ("events")}>Events</button>
          </li>
        <li>
          <button className = "font-mono hover:underline" onClick={() => setTab ("love")}>Wall of Love ❤️</button>
        </li>
        <li>
          <button className = "font-mono hover:underline" onClick={() => setTab ("partner")}>Partner with us!</button>
        </li>
      </ul>

      
      <div className = "m-2">
      <div className = "bg-slate-200">
      </div>
     
      <div className = "mx-48">
      {(tab === "home") ? (
            <div>
            <h1 className = "font-mono text-4xl pb-12">SF Product Gals 👋</h1>
            <p className ="tracking-widest font-light text-xl w-1/2 leading-8">150+ young womxn in product roles at tech companies, from the Bay Area and beyond. We’re here to build community, serendipitous friendships, and space for collaborative idea exploration. </p>
              <p className ="py-10 font-light text-xl w-1/2 tracking-widest leading-8	">Join our texting list to get involved, attend our events, and meet fellow womxn!</p>
            

              <div className="font-mono flex mt-10 relative">
                <p className="absolute font-mono text-lg pt-5 pl-8 z-10">+1</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="000-000-0000"
                  className="border text-lg tracking-wide focus:ring-gray-500 focus:border-gray-500 focus:bg-[#BFFB50]/10 block w-2/5 pl-20 py-5 bg-gray-900/0  border-gray-300 placeholder-gray-400"
                />
                {/* temporary solution: translate-x-[36rem] */}
                <span className="absolute mr-36 sm:translate-y-[5rem] xl:translate-y-0 right-1/2 xl:bottom-3.5 z-10">
                <button className="hover:bg-[#BFFB50] border border-black bg-white px-8 pb-2 h-10">
                  <p className="font-mono text-lg font-bold h-4 text-black tracking-wide">JOIN! 💌</p>
                </button>
                </span>
              </div>
            </div>
          ) : (tab === "about") ? (
            <div className = "">
               <h1 className = "text-4xl pb-12 font-mono">About us</h1>
               <p className ="tracking-widest font-light text-xl w-1/2 leading-8">As young women working in product in SF, we quickly realized that we were in the minority, often feeling the absence of female mentors and leaders, space to discuss challenges and questions, and feeling often overwhelmed or lonely at times. </p>
               <p className ="py-10 tracking-widest font-light text-xl w-1/2 leading-8">Inspired, we brought together small groups of women product leaders and founders, and saw a budding need for not only community, but curated, shared experiences and third spaces for friendships, inspirations, and shared ambitions. That was how Product Gals was born. </p>
               <p className ="tracking-widest font-light text-xl w-1/2 leading-8">Our community and events will provide this bridge between close, fun friendships and inspirational, ambitious career catalysts. From opportunities to get to know one another and bonding, to sharing stories, we’ll reimagine how to empower womxn in our spaces, together. </p>

              </div>
          ) : (tab === "events") ? (
            <div className = "">
               <>
                    {events.map(d => (
                        <Event
                            name={d.name}
                            description={d.description}
                            date={d.date}
                            />
                    ))}
                    </>
              </div>
          ) : (tab === "love") ? (
            <div className = "text-center">
               <h1 className = "text-4xl pb-12 font-mono">We love you all ❤️</h1>
               
              </div>
          ) : (
            <div className = "text-center">
               <h1 className = "text-4xl pb-12 font-mono">Sponsor an Event</h1>
               <p className ="tracking-widest font-light text-xl leading-8 xl:px-64 lg:px-48">Our sponsors and partners play a pivotal role in making our tight-knit, community-oriented events and spaces a reality. Support us and our community of young, ambitious product minds, from speaking opportunities, hosting events, and monetary sponsorship. We’d love to have you!</p>

            
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <form action="#" className="space-y-8">
                        <div>
                            <input type="email" id="email" className="shadow-sm border border-black text-gray-900 text-xl focus:ring-primary-500 focus:border-primary-500 block w-full py-2.5 pl-6" placeholder="you@company.com" required></input>
                        </div>
                        <div className="sm:col-span-2">
                            <textarea id="message" className="block w-full text-xl text-gray-900 shadow-sm border border-black pt-2.5 pb-10 pl-6 focus:ring-primary-500 focus:border-primary-500" placeholder="Tell us about you :)"></textarea>
                        </div>
                        <button type="submit" className="py-3 px-5 text-xl font-medium text-center text-black border border-black sm:w-fit hover:bg-[#BFFB50] focus:ring-4 focus:outline-none focus:ring-primary-300">Host with us! 💌</button>
                    </form>
                </div>

              </div>
          )}
     
      </div>
      </div>


<footer className="p-4 bg-white border-t-2 border-gray-50 md:flex md:items-center md:justify-between md:p-6">
    <span className="text-sm font-mono text-gray-400 sm:text-center">Curated with ❤️ by <a href="" className="hover:underline font-mono">Taryn</a> &amp; <a href="" className="hover:underline font-mono">Irene</a>
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <a href="#" className="font-mono mr-4 hover:underline md:mr-6 ">📍 SF</a>
        </li>
    </ul>
</footer>


    </main>


  )
}
