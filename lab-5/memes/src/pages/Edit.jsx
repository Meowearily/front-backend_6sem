import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";
import { exportComponentAsJPEG} from "react-component-export-image";
import { toJpeg } from "html-to-image";

const EditPage = () => {
    const [params] = useSearchParams();
    const [count, setCount] = useState(0);

    const memeRef = createRef();

    const addText = () => {
        setCount(count + 1);
    }

    console.log(params.get("url"));

    const handleExport = () => {
        if (memeRef.current === null) {
            return;
        }

        // Настройки для экспорта (опционально)
        const options = {
            quality: 1, // Качество изображения (от 0 до 1)
            backgroundColor: "#ffffff", // Фоновый цвет (если нужен)
        };

        toJpeg(memeRef.current, options)
            .then((dataUrl) => {
                const link = document.createElement("a");
                link.download = "meme.jpeg"; // Имя файла
                link.href = dataUrl;
                link.click();
            })
            .catch((error) => {
                console.error("Error exporting image:", error);
            });
    };

    // return (
    //     <div>
    //         <div 
    //             style={{width: "700px", border: "1px solid" }}
    //             ref={memeRef}
    //             className="meme mt-5 mb-5">
    //             <img src={params.get("url")} width="550px"/>
    //             {Array(count)
    //                 .fill(0)
    //                 .map((e) => (
    //                     <Text />
    //                 ))
    //             }
    //         </div>

    //         <Button onClick={addText}>Add Text</Button>
    //         <Button variant="success" onClick={(e) => exportComponentAsJPEG(memeRef)}>
    //             Save
    //         </Button>
    //     </div>
        
    // )

    return (
        <div>
            <div
                style={{
                    width: "550px",
                    border: "1px solid",
                    position: "relative", // Для позиционирования текста
                }}
                ref={memeRef}
                className="meme"
            >
                <img src={params.get("url")} width="550px" alt="Meme" />
                {Array(count)
                    .fill(0)
                    .map((e, index) => (
                        <Text key={index} />
                    ))}
            </div>

            <Button onClick={addText}>Add Text</Button>
            <Button variant="success" onClick={handleExport}>
                Save
            </Button>
        </div>
    );
};

export default EditPage;

