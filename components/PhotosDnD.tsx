import { FC } from "react";
import styled from "styled-components";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

type PhotoDndProps =  {
    images: string[]
    onDragEnd: () => void
}

const PhotosDnD: FC<PhotoDndProps> = ({images}) => {
    return (
        <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="photos">
            {images.map(image => (
            <Draggable>
                <Image src={image} alt= ""/> 
            </Draggable>)
            )}  
        </Droppable>
        </DragDropContext>
    );
}

export default PhotosDnD;

const Image = styled.img`
    aspect-ratio: 1.5;
    object-fit: cover;
    width: 150px;
`