import React from 'react';
import {Card, CardBody, CardTitle} from 'reactstrap';
import EntityView from '../../view/entity/EntityView';
import {Container} from '@material-ui/core';
export default function CustomCard({chars,name,dataInfo,dataInfo2,tittle1,tittle2}) {
    return(
        <Container xs={12} fluid>
            <Card>
                <CardBody>
                    <CardTitle>
                        {dataInfo} : {name}
                    </CardTitle>
                    <EntityView 
                        data1={name} 
                        data2={dataInfo} 
                        data3={dataInfo2} 
                        tittle1={tittle1}
                        tittle2={tittle2}
                        chars={chars}/>
                </CardBody>   
            </Card>
        </Container>
          
    )
}
