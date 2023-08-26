import { Contact, ButtonDelete } from './ContactItem.styled';
import PropTypes from 'prop-types';
import { FiPhone } from 'react-icons/fi';
import { useDispatch } from 'react-redux';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const deleteContact = id => {
    dispatch({
      type: 'contactsList/deleteContact',
      payload: id,
    });
  };

  return (
    <Contact key={id}>
      <FiPhone />
      <p>
        {name}: {number}
      </p>
      <ButtonDelete onClick={() => deleteContact(id)}>Delete</ButtonDelete>
    </Contact>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
