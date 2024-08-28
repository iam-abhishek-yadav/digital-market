import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant Delivery",
    Icon: ArrowDownToLine,
    description:
      "Receive your digital assets instantly via email, and download them without delay.",
  },
  {
    name: "Guaranteed Quality",
    Icon: CheckCircle,
    description:
      "Each asset undergoes thorough vetting to ensure it meets our strict quality standards.",
  },
  {
    name: "Eco-Friendly Commitment",
    Icon: Leaf,
    description:
      "We contribute 1% of our sales to environmental conservation efforts, supporting the protection and restoration of natural habitats.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
            Discover the Finest{" "}
            <span className='text-blue-600'>Digital Assets</span>
          </h1>
          <p className='mt-6 text-lg max-w-prose text-muted-foreground'>
            Welcome to DigitalHippo, where every digital asset is rigorously
            vetted to meet the highest standards of quality. Explore and elevate
            your projects with our premium selection.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <Link href='products' className={buttonVariants()}>
              Browse trending
            </Link>
            <Button variant='ghost'>Our quality promise &rarr;</Button>
          </div>
        </div>
        {/* List Products */}
      </MaxWidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {perks.map((perk) => (
              <div
                key={perk.name}
                className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                <div className='md:flex-shrink-0 flex justify-center'>
                  <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                    {<perk.Icon className='w-1/3 h-1/3' />}
                  </div>
                </div>
                <div className='mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6'>
                  <h3 className='text-base font-medium tex-gray-900'>
                    {perk.name}
                  </h3>
                  <p className='mt-3 text-sm text-muted-foreground'>
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
