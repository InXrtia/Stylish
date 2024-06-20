import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}
const Api = () => {
    const [data, setData] = useState<Todo | null>(null);
    const getAPIdate = async () => {
        //API call
        const url = "https://jsonplaceholder.typicode.com/posts/1";
        let result = await fetch(url);
        let data = await result.json();
        setData(data);
    }

    useEffect(() => {
        getAPIdate();
    }, [])

    return (
        <View>
            <Text>Api</Text>{data && (
                <View>
                    <Text style={{ fontSize: 25 }}>{data.id}</Text>
                    <Text style={{ fontSize: 20 }}>{data.userId}</Text>
                    <Text>Completed: {data.completed ? 'Yes' : 'No'}</Text>
                </View>
            )}
        </View>
    )
}

export default Api