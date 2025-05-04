import PropTypes from "prop-types";

const Loading = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center">
        <div
          className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"
          role="status"
          aria-label="Loading"
        />
        <p className="mt-4 text-gray-600">{message}</p>
      </div>
    </div>
  );
};

Loading.propTypes = {
  message: PropTypes.string,
};

export default Loading;
