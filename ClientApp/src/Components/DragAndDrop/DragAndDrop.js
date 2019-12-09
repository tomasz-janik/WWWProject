import React, { Component } from 'react'
class DragAndDrop extends Component {

    dropRef = React.createRef()
    state = {
        dragging: false,
    }

    handleDrag = (e) => {
        e.preventDefault()
        e.stopPropagation()
    }

    handleDragIn = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter++
        if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
            this.props.updateUploadLength(e.dataTransfer.items.length)
            if (e.dataTransfer.items.length === 1) {
                this.setState({
                    dragging: true
                })
            }
        }
    }

    handleDragOut = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.dragCounter--
        if (this.dragCounter > 0) {
            return
        }
        this.props.updateUploadLength(e.dataTransfer.items.length)
        this.setState(
            {
                dragging: false
            }
        )
    }

    handleDrop = (e) => {
        e.preventDefault()
        e.stopPropagation()
        this.setState(
            {
                dragging: false
            }
        )
        if (e.dataTransfer.files && e.dataTransfer.files.length === 1) {
            this.props.handleDrop(e.dataTransfer.files)
            e.dataTransfer.clearData()
            this.dragCounter = 0
        }
    }

    componentDidMount() {
        this.dragCounter = 0

        let div = this.dropRef.current

        div.addEventListener('dragenter', this.handleDragIn)
        div.addEventListener('dragleave', this.handleDragOut)
        div.addEventListener('dragover', this.handleDrag)
        div.addEventListener('drop', this.handleDrop)
    }

    componentWillUnmount() {
        let div = this.dropRef.current
        div.removeEventListener('dragenter', this.handleDragIn)
        div.removeEventListener('dragleave', this.handleDragOut)
        div.removeEventListener('dragover', this.handleDrag)
        div.removeEventListener('drop', this.handleDrop)
    }

    render() {
        return (
            <div ref={this.dropRef} >
                {this.state.dragging &&
                    <div className='dragging_container'>
                        <div className='dragging_overlay' />
                    </div>
                }
                {this.props.children}
            </div>
        )
    }
}
export default DragAndDrop