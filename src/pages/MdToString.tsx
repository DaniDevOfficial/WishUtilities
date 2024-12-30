import { Input, Text, Textarea } from '@chakra-ui/react'
import React from 'react'

export function MdToString() {
    const [mdText, setMdText] = React.useState('')
    const [singleString, setSingleString] = React.useState('')

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setSingleString(convertMdToSingleString(mdText))
    }


    function convertMdToSingleString(mdText: string) {
        return mdText.replace(/\n/g, '\\n').replace(/"/g, '\\"')
    }


    return (
        <>
        
            <form onSubmit={handleSubmit}>
                <Textarea
                    my={4}
                    placeholder="enter md text"
                    name="mdText"
                    value={mdText}
                    onChange={(event) => setMdText(event.target.value)}
                />
                <Input type="submit" value="Submit" />
            </form>
            {singleString && (
                <Text>
                    {singleString}
                </Text>
            )}
        </>
    )
}