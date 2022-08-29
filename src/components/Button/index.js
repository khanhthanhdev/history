import React from "react";
import PropTypes from "prop-types";

const shapes = { RoundedBorder8: "rounded-radius8" };
const variants = { FillGray300: "bg-gray_300 text-gray_900" };
const sizes = {
  sm: "lg:p-[18px] xl:p-[20px] 2xl:p-[23px] 3xl:p-[27px] p-[31px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf(["FillGray300"]),
  size: PropTypes.oneOf(["sm"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
