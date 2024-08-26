import React from 'react'
import {Html,Body,Container,Text,Link,Preview}  from "@react-email/components"

const WelcomTemplate = ({name}:{name:string}) => {
  return (
    <Html>
        <Preview>Welcom aboard!</Preview>
        <Body style={{background:"#fff"}}>
            <Container>
                <Text>
                    Hello {name}
                </Text>
                <Link href="www.sarthak.com">www.sarthak.com</Link>
            </Container>
        </Body>
    </Html>
  )
}

export default WelcomTemplate