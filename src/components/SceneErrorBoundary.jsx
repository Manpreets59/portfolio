import { Component } from "react";

class SceneErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // This is the actual failure reason — check here first whenever a 3D
    // section renders blank instead of guessing.
    console.error(`[${this.props.label || "3D scene"}] failed to render:`, error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="w-full h-full flex items-center justify-center text-white-50 text-sm p-4 text-center">
            Couldn't load this 3D scene. Check the browser console for the
            exact error.
          </div>
        )
      );
    }
    return this.props.children;
  }
}

export default SceneErrorBoundary;
