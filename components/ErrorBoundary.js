import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="container mt-5 text-center">
          <div style={{ padding: '60px 20px' }}>
            <i className="fa-solid fa-triangle-exclamation" style={{ fontSize: '80px', color: '#e72323' }}></i>
            <h2 className="mt-4">مشکلی پیش آمد</h2>
            <p style={{ color: '#666', marginTop: '20px' }}>
              متاسفانه خطایی رخ داده است. لطفا صفحه را رفرش کنید.
            </p>
            <button 
              className="btn btn-primary mt-3"
              onClick={() => window.location.reload()}
            >
              <i className="fa-solid fa-refresh me-2"></i>
              رفرش صفحه
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
