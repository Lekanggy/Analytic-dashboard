import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../components/charts/Chart'
import { Publish} from '@material-ui/icons'
import { productData } from '../../data'

const Product = () => {
    return (
        <div className="product">
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={ productData} dataKey="Sales" title="Sales Performance"/>
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSEhgSFRISGBUYFRoYHBwaGBIZFRgZGBgZGRwYGhgcIS4lHB4rHxgaJjgmKy8xQzU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xAA6EAACAQIEAwUECAcBAQEAAAABAgADEQQSITEFQVEGImFxgQcTUpEUFTJCoaKx0WJygpLB4fBTwzP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9miIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJS8rAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEx1BcEA2JFgenjLMViEpI1R2VUUFmJNgAOZM8L7c+1KtiGNDBs1KjqDUGlWpy7p+4vlr48oHP8AD+2WPwdQo1erdSVZXObvKbMGIs17g8z6z3T2f8dqY/AJXq5feZnViospKMQDbldbT5hZiTc6km5J3JO5vvPdPYliiMNUoEm2YVVva658ykeN/dkjyaB6jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQESl4vArNTH4+nh6bVarqiKLszGwH+/Ccl2r9pODwIKK4r1tslNgQp/jcaL5anwnh3antdiuJPmrPZAbrTW4pr6cz4mBPe0bt83EXNGiWXCq217NUI+83h0E4MCAIgVJ0npPZjtCOGV1DfZHuaVT+VEYsR5Gqx9Jw3BkX3nvHHcpD3h8Sv2V9WI06AyypVZyWY3ZmLHzY3P4mB9a03DKGUgqQCCNiDqCJknnvsf479IwX0dmu+HOQX3NM6p8tV9BPQoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIkD2w40MHhHq/fIyIOrsNPlv6QPN+2vamq+PqU6FepTp0abKSjuoLLfMxA00JHL7s4ulSxeMQDEYzFOHOiNVdgedgGJBPgBNPEcQGaofdE+9axGfW7XJUG3O51t8p03Dcc+EoipSw6OxUglnZWC5jorsBe+hsOdukCOr9jaSrd3xFP+I03dR5qUTS19m9OU5vinCWw+oqUqiXsHRr+QZDZlPmPImT/ABrtHUxCLmOU2uyjYG5G/PTX1nNVK7HmYGnaZEpX52m5h6Gc7L56g/MStRAh0A08SYF9ayUxSUm5Od9tTayr6An1YzVEM15SB3fscxxpcTCX7tWm6EeI7y/iPxn0HPnH2U0r8TSpsqKxJ5a6T6OgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgJ4j7VO0K1sV9HXMUo2FwRb3mpe4Oh0Ci/Kx66er9pOKrhMLUrk/ZQkeJtp+NvnPnRsQzlqjMgC5nYlA2Ysb633N9oFlGpQdlv9JDobhQlNgS1tu8CTYaaS/GYtq1QKGqZdu+gTLYakgMbDSb2EoVTTLjCAsQWvSZi6kgb03ueQFlItbQSOWm5Ql0dLNbvqyk7nS+/j5jrAj8TpNTczPiTraYaY1gb1E5EJvvNSo5Y3MVHJ05SwC8BKgStvETf4ThVZy76U6a53PUXACjxYkAecDpeyqmi1OmulXEuqDqtO4NR/7M/wCE+iJ8u8I4i7Y1MQxsS4AA2VDplHgB/wBrPpzCsWpox3KqfmAYGeJSVgIlIvArERAREQEREBERAREQEREBERAREQEREBInjnFUw9Gq5q0lZKZbvHa9wt1GpuRYW3M1e1PaSnw+mrvZmdgFXNlJH3mvY2AGpJnmfE+MHE11x9RlZaAIVUsaZYkhKZ+MZwCSd8ht0gYu3HaivVSlh6pRKyorVlUd1ahW+QAk6rcX1+0PCcbh6zFloqKdW4zMKiCy2ItZ1s41315X6zG9ZnJNWn7zMzMWvlqZ3JZmD6636gja40E1qa0gSyVwpY7VFdT6Misp8+75CBO47H1qQsKNRSdO6wdPRgAR5Eesi8ZXe/fzBrahswYeBB1HlNnBcTUZqdR82ndZSWGboTy56+E0sXUF4EZUNzK0xBl1Nb6fPygAl99h/wBYS12voNB0l9R76DYTHaBkw1A1HCjnz5AcyZM4rDG30dW7i2d9Nc1rKjeIFzbln6ymDomjTD2HvHNkvbSwBLHwUEMfEqOsCsi0wVa66ksd2NyGY+JMCPdvdjNzA08/+19J9I9iuMDGcPoVwdTTCtvo6d1xr/ECR4ET5hr1i7ZuXLwE9j9g/Ec1HE4U37jrVHk65W/FB84HrIMreYwZcIF15S8SkC8SstWXQEREBERAREQEREBERAREQERMb1AouSAPEgQMk1MdjadBDUqOFUdSNbC9h1Okg+NdtcJhgR7wO/JE7zE+k86xuNxXE6veZqdLfIDy6t6bAQMmLxNTH8Qeo2RvcBqaMhGQqWJDEXOVrbgE6yC7XYoU8uBphe4wqVcoGXPayUwB8Ct/czSXWseGYeq1lZywWidLNUYcxzVQMxB/hGuaQPBOHH3is5LEks5OrMx1JJO51PzgYuFYtF0fUnkwuPXnOhxPAKNRRUQ5WbW17qT4ncD0MkMV2Zw9TvBbE8xp+E2MDwsUrKpNud9zA5DjHDq9OnkcEouxFsl9r2vYc9PHwnKVqR1N7/rvad524xJy5AR/mefnMTuYFiUCfAdToPTrK1HFsq7cz1MuZepmEwKTb4XhveVVW19duvh6mw9ZqlpL8KGSjVrc7ZF/mYG9vHKGI8VEDW41jc9Ripup7iHlkU95h/M1z6yMaszIE5Ak+dzeUrvdtxppy5bn1Nz6y1LQMop2E7j2N473XFFp/dr06lM9LqPeKfyEes4bNedJ2BRhxPCuL/8A7oPQnKfwYwPpciVEqRKgQKWiXRaBQS6UErAREQKXiUtEC6IiAiJG8Z4xQwlP3leoFXYDdmPwqu7HygSU18TjKdIZqlREHVmAH4zy/ifbPGYpimHU4ensDYNXYdei+Q+cjE7Pe8bPXeo7dajsx+R2gegY32gcPp6Cv7w9Kas34gWkLifajTvanha7+JCqP1vIylwagvJR5D/c2FwdFf8AlgR/Eu3uNqqSlIUVHeuDdtNgfCReKpYvFHNWxFQg/duQvyG86DHU6Qov/ITy5a/4mXCVENJGA3RT81ECD4dwBaZuB6mdDhsMqDIoGu5O3iSeQE16uLsCdgNybKo+c5jtbxElkwyO+c2apY2VAR3UIG7WNyDtoLXvYNTiOK+mYvOL+5pXSkvXW7OfFmF/IKOUneC4IZszkC2w6mR/DuHoQLg3ta/OTeGwTg9yptsHFweuo/1AmQZYwmqcaaZy1kKfx70z/VyNvl1merUFr3uOVtj6wOM7WUwzTjKlgdJ0naLEFmOvOctVfWBjZrzGZUmWEwJ3s9SLqEUXZqgRRpqzZQB8zOzqdm8QAlJRTbumoSHQJ9vIoLNYXzrlHm3IXnKdkh3kYhiFrKxAALELkNlBBBY7AEG5Inf8Q446uaiUKzPUGRw/0lCwpuXDKquWQAuF0azXbQQIg9k2FMualNcuHFYqzIrA5spQqWuB/FbU6TA3Zistw6qpzFRdkscn2iTfboec3TxGuwAfCk56L0L5a+Z1Dh7gZr5lbnz1BvK8R445ZbAhVoU0X3i5WZVVhnsDYZizczygRZ4My2OekQSmzHZ1ZlY3A0IU6b+Gov0PZzgrrVzPlFiMv2heyircC1x3cp1A366SGocZ92b9w91VsM5NkRkFipuDZzqCNbbTquzHFTUuDTZFt0PeAREWxL3FgvMNe/pA6E4d+o8dTpawt+ImJjroTaZPpBvmsL7/AHt+u+kwk31gVuepi56mUiBW56mLnqZSIFbnqYueplIgLnqYiIHZREQE8O9qGIZ+JFqdek5poqGmxGZDbMbA9bjae4zyv2h9j6b1HxaVCjvq1swvy1IuG22IgcGnHcZTFhkUHkqqPxmvV49izoajfMS5sKUJBek38yKPzU8h/GWBUH3KJ8quKX8GdhA124jiPjf5mW/WNfm7zYZQdqZ/pxK/oyN+sotLrTxHpVw7f/IQNX6fVB+2+uh1PPSb1DtLiKdNaamyqMo0Gwj3Qt9jF/24dv8AKy7D4NXZUBxKlja7UaGUXO7EVdFG502EDNhOJ1SjYusxbK2Sih2eqBcuQd0pghrc2KDbMJl4Hw5nY1HuWYliTqSSbkknmZZRpDE1AVB9xTGSmDzVSSXI6uxZz4tblO24XgrjQadYFmGw1habtOi2hAMkaOGRRqLmW4ziNOipLEACBcrBhkZbg7gjQzmeNlMMc1OoEBJzIxJQ35jmuvTr0FjEcb7bNqtLQdZxON4i9Q3diT4mBv8AFcWHa/UX3vvIWo+se+JGU7fpfpLqeFZzYKT+kDEWmfCYN6hsosBqWOiqBuSeQm8nD0p61GubXyi1/W+w8TYSUp4Rqi3buUFscqKxdra6AC5N/AeQteBscEZaI7jFVptneqw7qlbWsp1LXFlWx18SAMp7bOTZQwUDKoKUmKpcHLc73ygnrOf4tUxFayJh6lOihuqBW1PxOebfp8ydKjw3EH7NCqf6GgdeO1zty0uTbJSy3bQkjrYkepmLFcZFZs7rdrWvlpi+pNzbc3J1kTh+zuPf7ODrn+kD9TJOh2L4m22DcfzPQX9XgZKePXoR8v3ncdhqPv2bKQLLz8x0nN4H2ccScjP9GprzLVCx+SKb/MT0nsf2W+gKS1Y1HYWJC5EAvewW5JPiT6CBvfUr/En5v2j6lf4k/N+0nFl8CA+pX+JPzftH1K/xJ+b9pPxAgPqV/iT837R9Sv8AEn5v2k/ECA+pX+JPzftH1K/xJ+b9pPxAgPqV/iT837RJ+ICIiAmGvh0cWZQw8QDM0QOdxXYzA1DdqCgn4SV/SRtX2a4Bvu1B5Of8ztIgcBU9lWBOzVh/Up/UTXf2R4M7Vaw/s/aejxA8zPshw/LE1h6JOP7YdnaXDHFOnXqPUqIVOawCKx7xFueVSD4PPfJ8/wDtDxWfi1ZTeyZE/IpJHpYekCS7N8OzoG+ygFh1bxnWoyqMo2nG8N4sQFpggKB+AknX4kFpNVYhVGi3O/pA3eK8aSipJYXnmXG+OvXY3Y5eQmrxnipquTfSR+Hwr1D3QbdeUCx6l5nw2BepysOpkrQ4fTpDM5BPU7X8BMhxTMcqKRrzF2/tOi/1EeRgY6PDqdMZnIPntfoBzl1Jy7FaYYLfewB8sx+wN+RPgN5cuHVTmqPdugJLeRbTTwFh4GbC45VFkAAG1hA3cBwtE71Q31vYdbWvrfX+JrmTD8UVQFSmoA+fqec5tMU7mwzGS+A4TVqEXBgbWHrvUbYTquFcOOhMrwbgOSxI1nWYXBZRtAw4XC2khTozMlO0yqsC1UmRVlwWXAQAlYiAiIgIiICIiAiIgImr9Ppf+i/OPp9L/wBF+cDaiav0+l/6L85fTxSMbK6k9AYGeIiAiIgJ4Z24wiYjGVbnJiUdhblUp5iUZfi7uUG2oIPKe5zhu3HZRsURVporuLaXUNpsRm0PqYHi70sRT0ChvIj/ADMWLGKrgK7AKuwvoPQTosfwTFU2KtRxS+ISoR6OQQR5TW+psS4AWhiyeqU65Y+dhb8IEInDadMZqjXPjoPQbmbH0l20pU7L8RFh6D/vKdBguwWOqG64Mr/HWdF/AksP7Z0uC9ltd9a+KVR8NNST5Z2/aB5zkVTmdyzeBN/ny9LDwl1N3qd2nTIHRR/kbT2jh3s2wNKxKNUPV2v+G06LC8DoUxZaaDyUQPCcD2VxNXX3ZUeOpnU8M9nbGxe589BPW0w6jYCXBR0gcdw/sXTpgaD5Sdw/B6dMaKJLWlMkDUWkBsJmRJmCCXWgWKkvAlYgIiICIiAiIgIiICIiAiIgQCcLqj4NbfePIg9PCZDgq1rdwmx1LNcX1uNNP9CIgXJgqw+De9sxtuT08vkJnw+HqBwzBbANsb7+kRAkoiICIiAiIgUi0RArERASkRASsRAREQEREBERAREQEREBERAREQEREBERA//Z"
                            alt=""
                            className="productInfoImg"
                        />
                        <span className="productName">Lether Shoe</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">id:</span>
                            <span className="productInfoValue">120</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">sales:</span>
                            <span className="productInfoValue">5520</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">active:</span>
                            <span className="productInfoValue">yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">in stock:</span>
                            <span className="productInfoValue">no</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label >Product Name</label>
                        <input type="text" placeholder="Lether shoe" />
                        <label >In stock</label>
                        <select name="instock" id="instock">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        <label >Active</label>
                        <select name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBQSEhgSFRISGBUYFRoYHBwaGBIZFRgZGBgZGRwYGhgcIS4lHB4rHxgaJjgmKy8xQzU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIALgBEgMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECAwQGBwj/xAA6EAACAQIEAwUECAcBAQEAAAABAgADEQQSITEFQVEGImFxgQcTUpEUFTJCoaKx0WJygpLB4fBTwzP/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9miIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICJS8rAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEx1BcEA2JFgenjLMViEpI1R2VUUFmJNgAOZM8L7c+1KtiGNDBs1KjqDUGlWpy7p+4vlr48oHP8AD+2WPwdQo1erdSVZXObvKbMGIs17g8z6z3T2f8dqY/AJXq5feZnViospKMQDbldbT5hZiTc6km5J3JO5vvPdPYliiMNUoEm2YVVva658ykeN/dkjyaB6jERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQESl4vArNTH4+nh6bVarqiKLszGwH+/Ccl2r9pODwIKK4r1tslNgQp/jcaL5anwnh3antdiuJPmrPZAbrTW4pr6cz4mBPe0bt83EXNGiWXCq217NUI+83h0E4MCAIgVJ0npPZjtCOGV1DfZHuaVT+VEYsR5Gqx9Jw3BkX3nvHHcpD3h8Sv2V9WI06AyypVZyWY3ZmLHzY3P4mB9a03DKGUgqQCCNiDqCJknnvsf479IwX0dmu+HOQX3NM6p8tV9BPQoCIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIkD2w40MHhHq/fIyIOrsNPlv6QPN+2vamq+PqU6FepTp0abKSjuoLLfMxA00JHL7s4ulSxeMQDEYzFOHOiNVdgedgGJBPgBNPEcQGaofdE+9axGfW7XJUG3O51t8p03Dcc+EoipSw6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"
                                alt=""
                                className="productUploadImg"
                            />
                            <label for="file">
                                <Publish/>
                            </label>
                            <input type="file" id="file" style={{display: "none"}}/>
                        </div>
                        <button className="productButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
