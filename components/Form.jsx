import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <session className="flex-col w-full max-w-full flex-start">
      <h1 className="text-left head_text">
        <span className="blue_gradient">{type} Post</span>
      </h1>

      <p className="max-w-md text-left desc">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-Powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full max-w-2xl mt-10 gap-7 glassmorphism"
      >
        <label htmlFor="ai-prompt-desc">
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your AI Prompt here..."
            required
            className="form_textarea"
          />
        </label>

        <label htmlFor="ai-prompt-tags">
          <span className="text-base font-semibold text-gray-700 font-satoshi">
            AI prompt Tags {` `}
            <span className="font-normal">(#product, #web, #chatgpt, #idea)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#Prompttags"
            required
            className="form_input"
          />
        </label>

        <div className="gap-4 mx-3 mb-5 flex-end">
          <Link href="/" className="text-sm text-gray-500">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white">
            {submitting ? `${type}...` : type }
          </button>
        </div>

      </form>
    </session>
  );
};

export default Form;
