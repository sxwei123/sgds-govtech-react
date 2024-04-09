import * as React from 'react';
import { useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AccordionContext, {
  AccordionEventKey,
  isAccordionItemSelected,
} from './AccordionContext';
import AccordionItemContext from './AccordionItemContext';
import {
  BsPrefixProps,
  BsPrefixRefForwardingComponent,
} from '../utils/helpers';
import { useBootstrapPrefix } from '../ThemeProvider/ThemeProvider';

type EventHandler = React.EventHandler<React.SyntheticEvent>;

export interface AccordionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    BsPrefixProps {}

const propTypes = {
  /** Set a custom element for this component */
  as: PropTypes.elementType,

  /** @default 'accordion-button' */
  bsPrefix: PropTypes.string,

  /** A callback function for when this component is clicked */
  onClick: PropTypes.func,
};

export function useAccordionButton(
  eventKey: string,
  onClick?: EventHandler
): EventHandler {
  const { activeEventKey, onSelect, alwaysOpen } = useContext(AccordionContext);

  return (e) => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    let eventKeyPassed: AccordionEventKey;
    if (alwaysOpen) {
      if (Array.isArray(activeEventKey)) {
        if (activeEventKey.includes(eventKey)) {
          eventKeyPassed = activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...activeEventKey, eventKey];
        }
      } else {
        if (activeEventKey) {
          eventKeyPassed =
            eventKey === activeEventKey ? null : [activeEventKey, eventKey];
        } else {
          eventKeyPassed = [eventKey];
        }
      }
    } else {
      if (Array.isArray(activeEventKey)) {
        // for the case when `alwaysOpen` prop set to false from true, the activeEventKey is still an array of keys
        if (activeEventKey.includes(eventKey)) {
          // when the current event key is one of the active keys, collapse the current and the rest of the active keys except for the first one
          const eventKeys = activeEventKey.filter((k) => k !== eventKey);
          const eventKeysInNumber = eventKeys.map(Number);
          eventKeyPassed = Math.min(...eventKeysInNumber).toString();
        } else {
          // when the current event key is not one of the active keys, set it to expand and collapse all of the active keys
          eventKeyPassed = eventKey;
        }
      } else {
        eventKeyPassed = eventKey === activeEventKey ? null : eventKey;
      }
    }

    onSelect?.(eventKeyPassed, e);
    onClick?.(e);
  };
}

export const AccordionButton: BsPrefixRefForwardingComponent<
  'div',
  AccordionButtonProps
> = React.forwardRef<HTMLButtonElement, AccordionButtonProps>(
  (
    {
      // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
      as: Component = 'button',
      bsPrefix,
      className,
      onClick,
      ...props
    },
    ref
  ) => {
    bsPrefix = useBootstrapPrefix(bsPrefix, 'accordion-button');
    const { eventKey } = useContext(AccordionItemContext);
    const accordionOnClick = useAccordionButton(eventKey, onClick);
    const { activeEventKey } = useContext(AccordionContext);

    if (Component === 'button') {
      props.type = 'button';
    }

    return (
      <Component
        ref={ref}
        onClick={accordionOnClick}
        {...props}
        aria-expanded={isAccordionItemSelected(activeEventKey, eventKey)}
        className={classNames(
          className,
          bsPrefix,
          !isAccordionItemSelected(activeEventKey, eventKey) && 'collapsed'
        )}
      />
    );
  }
);

AccordionButton.propTypes = propTypes;
AccordionButton.displayName = 'AccordionButton';

export default AccordionButton;
