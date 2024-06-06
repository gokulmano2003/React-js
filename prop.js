import { Card } from './Cards';
import { Table } from './Table';
import { TableRow } from './Table';
export var Prop = () => {
    return (
        <>   <h1>PRODUCTS</h1>
            <div className="App">
                <Card
                    img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/82/6142201/1.jpg?2933"
                    name="Cyxus"
                    desc="Non-Slip Fitness Leisure Running Sneakers"
                    price="$29"
                />
                <Card
                    img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/01/241417/1.jpg?6747"
                    name="Vitike"
                    desc="Latest Men Sneakers -Black"
                    price="$100"
                />
                <Card
                    img="https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/4410121/1.jpg?4437"
                    name="Aomei"
                    desc="Men's Trend Casual Sports Shoe"
                    price="$40"
                />
            </div>
             
         <Table>
            <TableRow count="1" name="John Doe" dept="Engineering" />
            <TableRow count="2" name="Jane Smith" dept="Marketing" />
        </Table>
                     
        </>
    );
}