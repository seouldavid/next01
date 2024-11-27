"use client";

import { useEffect, useState } from "react";
import { Button } from "@mui/material";

function Page({ item }) {
    const [loading, setLoading] = useState(true); // 로딩 상태 관리
    const [data, setData] = useState(null); // 데이터 상태

    useEffect(() => {
        if (item) {
            // 데이터가 전달되면 로딩 완료
            setData(item);
            setLoading(false);
        }
    }, [item]);

    // 로딩 중 화면
    if (loading) {
        return (
            <div style={{ textAlign: "center", padding: "20px" }}>
                <h2>Loading...</h2>
            </div>
        );
    }

    // 로딩 완료 후 화면
    return (
        <div className="wrap">
            <div className="img_itemimg">
                <img
                    src={data.image_link}
                    alt={data.name}
                    width={300}
                    height={300}
                />
            </div>
            <div className="info_item">
                <strong className="tit_item">{data.name}</strong>
                <strong className="num_price">$ {data.price}</strong>
                <span className="txt_info">
                    {data.category ? `${data.category}/` : ""} {data.product_type}
                </span>
                <div className="button_group">
                    <Button
                        variant="contained"
                        color="success"
                        style={{ marginRight: "10px" }}
                    >
                        구매하기
                    </Button>
                    <Button variant="contained" color="error">
                        취소하기
                    </Button>
                </div>
            </div>
            <div className="disWrap">
                <hr />
                <h1 style={{ margin: "20px" }}>Description</h1>
                <div style={{ paddingBottom: "20px", fontSize: "24px" }}>
                    {data.description}
                </div>
            </div>
        </div>
    );
}

export default Page;
