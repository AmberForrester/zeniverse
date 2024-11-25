import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({ id, title, rightIcon, leftIcon, containerClass, href, onClick }) => {
  const sharedClasses = clsx(
    "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
    containerClass
  );

  if (href) {
    // Render as an anchor link for navigation
    return (
      <a
        id={id}
        href={href}
        className={sharedClasses}
      >
        {leftIcon}
        <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
          <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
            {title}
          </div>
          <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
            {title}
          </div>
        </span>
        {rightIcon}
      </a>
    );
  }

  // Render as a button for onClick functionality
  return (
    <button
      id={id}
      className={sharedClasses}
      onClick={onClick}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
          {title}
        </div>
        <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
          {title}
        </div>
      </span>
      {rightIcon}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  rightIcon: PropTypes.node,
  leftIcon: PropTypes.node,
  containerClass: PropTypes.string,
  href: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  id: "",
  rightIcon: null,
  leftIcon: null,
  containerClass: "",
  href: null,
  onClick: null,
};

export default Button;