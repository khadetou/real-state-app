import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../utils/fetchApi';

interface Props {
  purpose?: string;
  title1?: string;
  title2?: string;
  description1?: string,
  description2?: string,
  linkName: string;
  buttonText?: string;
  imageUrl: string;

}

const Banner = ({ purpose, title1, title2, description1, description2, linkName, buttonText, imageUrl }: Props) => {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={imageUrl} width={500} height={300} alt="banner" />
      <Box p="5">
        <Text fontSize="sm" color="gray.500" textAlign="center" fontWeight="medium">
          {purpose}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1}
          <br />
          {title2}
        </Text>
        <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="grey.700" fontWeight="bold">
          {description1}
          <br />
          {description2}
        </Text>
        <Button fontSize="xl" >
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}

const Home: NextPage = () => {
  return (
    <Box >
      <Banner
        purpose={"For Sale"}
        title1={"Rental Homes for"}
        title2={"Everyone"}
        description1={"Explore Appartements, Villas, Homes"}
        description2={"and more"}
        buttonText={"Explore Renting"}
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        linkName="/search?purpose=for-rent"
      />
      <Flex flexWrap="wrap">

      </Flex>
      <Banner
        purpose={"Buy A Home"}
        title1={"Find Buy & Own Your"}
        title2={"Dream Home"}
        description1={"Explore Appartements, Villas, Homes"}
        description2={"and more"}
        buttonText={"Explore Renting"}
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        linkName="/search?purpose=for-rent"
      />
    </Box>
  )
}

export default Home


// export function  async getStaticProps ():GetStaticProps {
//   const propertyForSale = await  fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&perpose=for-sale&hitsPerPage=6`);
//   const propertyRent =  fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&perpose=for-rent&hitsPerPage=6`);

//   return {
//     props:{}
//   }
// }