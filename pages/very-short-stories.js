import Header from "@/components/Header";
import {VeryShortStories} from '../content/Items'
import FeaturedDisplay from "@/components/FeaturedDisplay";
import PageItems from '@/components/PageItems'
import NewProducts from "@/components/NewProducts";
import { useState } from "react";
import Footer from "@/components/Footer";

export default function ScribbleDogsPage() {
    return (
        <div>
          <Header />
          <FeaturedDisplay product={VeryShortStories[0]}/>
          <PageItems products={VeryShortStories.slice(1)}/>
          <Footer />
        </div>
    )
}