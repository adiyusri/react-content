import { Box, Text, UnorderedList, ListItem, Icon, Button } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons'


function Content() {
    return (
       <Box maxWidth="75%" mx="auto" mt={10}>
        <Box >
            
            <Button
               variant="unstyled"
               color="blue.500"
               leftIcon={<Icon as={ArrowBackIcon} />}
            >
                Content
            </Button>
         <Text
            fontWeight="bold"
            fontSize="3xl"
         >
            Lorem Ipsum Sit Dolor Amet
         </Text>
        </Box>
        <Box>
         <Text
            fontWeight="thin"
            fontSize="smaller"
         >
            29/06/2022 09:50
         </Text>
        </Box>
        <Box
            mt={10}
            bg="gray.100"
            pt={5}
            pl={5}
            pb={5}
            rounded="lg"
            boxShadow="lg"
        >
            <Text>
            Sed vitae blandit erat. Nullam accumsan nisl sit amet neque rutrum, vitae lacinia purus vehicula. Mauris hendrerit eget sem et elementum. Pellentesque auctor nisl sed ex consequat ultrices. Vestibulum gravida vulputate consequat. Ut laoreet id justo ac scelerisque. Sed accumsan elementum nunc, in aliquam nunc porttitor sit amet. Sed ullamcorper auctor augue quis aliquet. Praesent blandit dolor massa, ac molestie libero imperdiet eget.
            </Text>
            <Text mt={5}>
            Pellentesque erat ante, bibendum nec libero et, venenatis auctor dui. Aliquam non mauris velit. Maecenas ac risus purus. Aliquam quis sodales risus. Nam eu semper lectus, vel dictum ex. Aliquam in rutrum felis, non gravida massa. Donec sapien tortor, venenatis et leo ac, suscipit gravida enim. Nulla scelerisque leo et efficitur condimentum. In at sagittis tellus. Nunc quis erat at velit facilisis aliquam in id risus. Sed risus magna, finibus non tincidunt quis, placerat eu magna. Proin eu iaculis erat, laoreet scelerisque augue. Vivamus dapibus dui urna, vitae bibendum magna sodales ac.
            </Text>
            <UnorderedList mt={5}>
                <ListItem>Lorem ipsum dolor sit amet</ListItem>
                <ListItem>Consectetur adipiscing elit</ListItem>
                <ListItem>Integer molestie lorem at massa</ListItem>
                <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                <ListItem>Lorem ipsum dolor sit amet, consectetur adipisicing elit</ListItem>
                <ListItem>Assumenda, quia temporibus eveniet a libero incidunt suscipit</ListItem>
                <ListItem>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</ListItem>
                <ListItem>Quidem, ipsam illum quis sed voluptatum quae eum fugit earum</ListItem>
            </UnorderedList>
        </Box>
       </Box> 
    );
}

export default Content;