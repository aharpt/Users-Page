import React from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, Container, Row, Col} from 'react-bootstrap';
import UserForm from './UserForm';

function Dialog(
    {
        buttonText,
        headingText,
        bodyContent,
        primaryButtonText = "Save",
        onPrimaryButtonClick,
    }
) {
    const [show, setShow] = React.useState(false);

    const handleSave = () => {
        // TODO: save user to db
        setShow(false);
    }

    return (
        <>
            <Container fluid>
                <Row>
                <Col sm={1}>
                    <Button variant='primary' onClick={() => setShow(true)}>{buttonText}</Button>
                </Col>
                </Row>
            </Container>

            <Modal backdrop='static' show={show} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                <Modal.Title>{headingText}</Modal.Title>
                </Modal.Header>
                <Modal.Body><UserForm handleSave={handleSave} submitButtonText='Add User' /></Modal.Body>
            </Modal>
        </>
    )
}

Dialog.propTypes = {
    buttonText: PropTypes.string,
    headingText: PropTypes.string,
    bodyContent: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    primaryButtonText: PropTypes.string,
    onPrimaryButtonClick: PropTypes.func || undefined,
}

export default Dialog;